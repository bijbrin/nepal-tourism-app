-- Re-enable RLS and ensure policy exists
ALTER TABLE places ENABLE ROW LEVEL SECURITY;

-- Drop if exists, then create
DROP POLICY IF EXISTS "Places are viewable by everyone" ON places;

-- Create fresh policy
CREATE POLICY "Places are viewable by everyone" 
  ON places FOR SELECT 
  USING (true);

-- Verify
SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'places';
