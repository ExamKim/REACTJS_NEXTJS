import { useRecoilValue } from 'recoil';
import { userAtom } from '../atom/AuthAtom';

export default function UserBadge() {
    const user = useRecoilValue(userAtom);

    return (
        <p className='muted'>
            {user ? `Logged in as: ${user.username}` : 'Not logged in'}
        </p>
    );
}
