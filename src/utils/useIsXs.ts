import { useMediaQuery, useTheme } from '@mui/material';

const useIsXs = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.only("xs"));
}

export default useIsXs