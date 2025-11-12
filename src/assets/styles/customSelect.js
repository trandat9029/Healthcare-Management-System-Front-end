
export const customStyles = {
        control: (base, state) => ({
            ...base,
            boxShadow: state.isFocused ? '0 0 0 1px #6c63ff' : 'none',
            '&:hover': {
                borderColor: '#6c63ff',
            },
            minHeight: '45px',
            borderRadius: '4px',
        }),
        option: (base) => ({
            ...base,
            backgroundColor: '#f7f7f7',
            '&:hover': {
                backgroundColor: '#e2e2e2',
            },
        }),
        menu: (base) => ({
            ...base,
            borderRadius: '8px',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        }),
    };
