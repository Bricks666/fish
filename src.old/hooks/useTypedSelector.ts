import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '@/models';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
