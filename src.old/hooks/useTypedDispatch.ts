import { useDispatch } from 'react-redux';
import { AppDispatch } from '@old/models';

export const useTypedDispatch: () => AppDispatch = useDispatch;
