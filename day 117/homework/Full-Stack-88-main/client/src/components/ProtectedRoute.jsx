import  useAuth  from '../context/AuthContext';
import { Navigate } from 'react-router';

function ProtectedRoute (props) {
    const { user } = useAuth();

    return user ? props.children : <Navigate to='/' />
}

export default ProtectedRoute;