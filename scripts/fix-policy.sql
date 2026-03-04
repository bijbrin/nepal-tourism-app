-- Fix: Drop existing policy first, then recreate
DROP POLICY IF EXISTS "Places are viewable by everyone" ON places;

-- Recreate the policy
CREATE POLICY "Places are viewable by everyone" 
  ON places FOR SELECT USING (true);

-- Verify RLS is enabled
ALTER TABLE places ENABLE ROW LEVEL SECURITY;
