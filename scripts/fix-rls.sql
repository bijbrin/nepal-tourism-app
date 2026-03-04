-- Fix RLS policies for places table

-- Temporarily disable RLS for seeding (re-enable after)
ALTER TABLE places DISABLE ROW LEVEL SECURITY;

-- Or create a policy that allows inserts
CREATE POLICY "Enable insert for authenticated users only" 
  ON places FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

-- Alternative: Allow service role to insert
CREATE POLICY "Enable insert for service role" 
  ON places FOR INSERT 
  TO service_role 
  WITH CHECK (true);
