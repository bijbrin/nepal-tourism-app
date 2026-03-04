// Test fetching places from Supabase
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://erbbaryfxeutklfqvfmz.supabase.co';
const supabaseKey = 'sb_publishable_JNa0CZmf9iogdrOPQ14QhQ_UOaMA5kY';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testFetch() {
  console.log('Testing fetch from Supabase...');
  
  const { data, error } = await supabase
    .from('places')
    .select('*')
    .limit(5);

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log(`✅ Fetched ${data.length} places:`);
  data.forEach(p => console.log(`  - ${p.name} (${p.location})`));
}

testFetch();
