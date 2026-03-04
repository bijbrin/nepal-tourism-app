-- Re-enable RLS after seeding
ALTER TABLE places ENABLE ROW LEVEL SECURITY;

-- Create read-only policy for everyone
CREATE POLICY "Places are viewable by everyone" 
  ON places FOR SELECT USING (true);
