# Supabase Setup for Nepal Tourism App

## 1. Create Supabase Project
1. Go to https://supabase.com
2. Sign up with GitHub
3. Create new project: "nepal-tourism-db"
4. Choose region: Singapore (closest to you)
5. Save the password!

## 2. Database Schema

Run this SQL in Supabase SQL Editor:

```sql
-- Places table (seed with 100 destinations)
create table places (
  id bigint primary key,
  name text not null,
  category text,
  location text,
  description text,
  how_to_reach text,
  duration text,
  best_season text,
  rating decimal(2,1),
  highlights text[],
  image_url text,
  external_links jsonb,
  created_at timestamp default now()
);

-- User trip plans
 create table trip_plans (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  place_id bigint references places(id) not null,
  loved boolean default true,
  visited boolean default false,
  notes text,
  planned_start_date date,
  planned_end_date date,
  budget_estimate decimal(10,2),
  priority text check (priority in ('must-see', 'maybe', 'backup')),
  custom_links jsonb default '[]',
  checklist jsonb default '[]',
  created_at timestamp default now(),
  updated_at timestamp default now(),
  unique(user_id, place_id)
);

-- Enable RLS
alter table places enable row level security;
alter table trip_plans enable row level security;

-- Places are readable by all
create policy "Places are viewable by everyone" 
  on places for select using (true);

-- Users can only see their own trip plans
create policy "Users can view own trip plans" 
  on trip_plans for select using (auth.uid() = user_id);
  
create policy "Users can insert own trip plans" 
  on trip_plans for insert with check (auth.uid() = user_id);
  
create policy "Users can update own trip plans" 
  on trip_plans for update using (auth.uid() = user_id);
  
create policy "Users can delete own trip plans" 
  on trip_plans for delete using (auth.uid() = user_id);
```

## 3. Environment Variables

Add to `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 4. Install Supabase Client

```bash
npm install @supabase/supabase-js
```

## 5. Seed Places Data

I'll create a seed script to upload all 100 places.
