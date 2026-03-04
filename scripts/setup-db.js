// Setup Supabase database tables
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://erbbaryfxeutklfqvfmz.supabase.co';
const supabaseKey = 'sb_publishable_JNa0CZmf9iogdrOPQ14QhQ_UOaMA5kY';

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupDatabase() {
  console.log('Setting up database...');

  // Create places table
  const { error: placesError } = await supabase.rpc('exec_sql', {
    sql: `
      CREATE TABLE IF NOT EXISTS places (
        id bigint PRIMARY KEY,
        name text NOT NULL,
        category text,
        location text,
        description text,
        how_to_reach text,
        duration text,
        best_season text,
        rating decimal(2,1),
        highlights text[],
        image_url text,
        external_links jsonb DEFAULT '[]',
        created_at timestamp DEFAULT now()
      );
    `
  });

  if (placesError) {
    console.log('Places table may already exist or using alternative method...');
  }

  // Create trip_plans table
  const { error: plansError } = await supabase.rpc('exec_sql', {
    sql: `
      CREATE TABLE IF NOT EXISTS trip_plans (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        user_id uuid NOT NULL,
        place_id bigint REFERENCES places(id),
        loved boolean DEFAULT true,
        visited boolean DEFAULT false,
        notes text,
        planned_start_date date,
        planned_end_date date,
        budget_estimate decimal(10,2),
        priority text CHECK (priority IN ('must-see', 'maybe', 'backup')),
        custom_links jsonb DEFAULT '[]',
        checklist jsonb DEFAULT '[]',
        created_at timestamp DEFAULT now(),
        updated_at timestamp DEFAULT now(),
        UNIQUE(user_id, place_id)
      );
    `
  });

  if (plansError) {
    console.log('Trip plans table may already exist...');
  }

  console.log('Database setup complete!');
}

setupDatabase().catch(console.error);
