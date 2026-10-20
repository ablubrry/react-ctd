import SnackHeader from './SnackHeader';
import SnackFooter from './SnackFooter';
import SnackList from './SnackList';

export default function SnackApp() {
    return (
        <div>
            <SnackHeader />
            <SnackList />
            <SnackFooter />
        </div>
    );
}