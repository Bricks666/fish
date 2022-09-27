import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '@/models';

export const useTypesSelector: TypedUseSelectorHook<AppState> = useSelector;
