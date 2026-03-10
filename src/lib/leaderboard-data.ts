// Pool of common Indian names (non-celebrity, everyday people)
const NAME_POOL = [
  "Rajesh Kumar", "Anita Sharma", "Vikrant Tiwari", "Sunita Devi", "Manoj Yadav",
  "Kavita Mishra", "Pankaj Gupta", "Rekha Soni", "Bhupendra Joshi", "Neelam Verma",
  "Suresh Prasad", "Asha Kumari", "Ramesh Chauhan", "Lata Pandey", "Dinesh Sahu",
  "Geeta Rajput", "Mukesh Agrawal", "Pushpa Rathore", "Harish Chandra", "Suman Dubey",
  "Anil Thakur", "Meena Chouhan", "Pramod Singh", "Usha Prajapati", "Yogesh Nagar",
  "Saroj Bai", "Rakesh Dewangan", "Kiran Sahu", "Govind Patel", "Nirmala Kashyap",
  "Ashok Dhruv", "Savita Rani", "Deepak Kurre", "Annapurna Soni", "Santosh Markam",
  "Lakshmi Yadav", "Mahendra Sinha", "Hemlata Nishad", "Rajendra Patel", "Durga Prasad",
  "Vinod Tandan", "Champa Bai", "Kamlesh Verma", "Tulsa Devi", "Bihari Lal",
  "Manju Sharma", "Jagdish Sahu", "Phoolmati Devi", "Narayan Das", "Basanti Kumari",
  "Ratan Lal", "Sundari Devi", "Omkar Nath", "Kamla Devi", "Ghanshyam Patel",
  "Radha Kumari", "Balram Yadav", "Shanti Devi", "Trilok Chand", "Malti Soni",
  "Devendra Kumar", "Parvati Sahu", "Kishore Nag", "Vimla Devi", "Ganpat Rao",
  "Sushila Bai", "Ramcharan Sahu", "Janki Devi", "Bhagwan Das", "Kalawati Devi"
];

const STATUSES = ['Legend', 'Master', 'Elite', 'Pro'] as const;

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

function generateTraders(seed: number) {
  const rng = seededRandom(seed);
  const shuffled = [...NAME_POOL].sort(() => rng() - 0.5);
  const selected = shuffled.slice(0, 35);

  return selected.map((name, i) => {
    const deposit = Math.floor(20000 + rng() * 30000);
    const profit = Math.floor(5000 + rng() * 15000);
    const withdrawal = Math.floor(2000 + rng() * (profit * 0.8));
    const loss = Math.floor(300 + rng() * 2000);
    const statusIdx = i < 8 ? 0 : i < 16 ? 1 : i < 26 ? 2 : 3;

    return {
      name,
      deposit,
      profit,
      loss,
      withdrawal,
      status: STATUSES[statusIdx] as string,
    };
  }).sort((a, b) => b.profit - a.profit);
}

// Generate initial set based on current 15-minute window
function getCurrentSeed() {
  const now = Date.now();
  return Math.floor(now / (15 * 60 * 1000)); // Changes every 15 minutes
}

export const INITIAL_TRADERS = generateTraders(getCurrentSeed());
export { generateTraders, getCurrentSeed };
