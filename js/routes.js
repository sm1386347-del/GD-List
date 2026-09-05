import List from './pages/List.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';

export default [
    { path: '/GD-List/', component: List },
    { path: '/GD-List/leaderboard', component: Leaderboard },
    { path: '/GD-List/roulette', component: Roulette },
];
