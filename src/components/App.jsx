import { Profile } from './Profile/Profile.jsx';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics.jsx';
import data from './Statistics/data.json';
import { FriendList } from './Friends/FriendList/FriendList.jsx';
import friends from './Friends/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
