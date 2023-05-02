import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '@old/models';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
