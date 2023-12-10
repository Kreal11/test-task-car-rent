export const customBrandSelect = {
  control: (provided, state) => ({
    ...provided,
    width: '225px',
    height: '48px',
    flexWrap: 'nowrap',
    display: 'flex',
    padding: '14px 0px 14px 4px',
    justifyContent: 'space-bewtween',
    alignItems: 'center',
    border: 'none',
    borderRadius: '14px',
    background: '#f7f7fb',
    color: '#121417',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: 1.11,
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    borderRadius: '14px',
    color: state.isFocused ? '#121417' : '#121417',
    boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
    padding: '0px 18px 0px 0px',
  }),
  menu: (provided, state) => ({
    ...provided,
    color: 'rgba(18, 20, 23, 0.20)',
    display: 'inline',
    height: 'auto',
    padding: '14px 8px 14px 18px',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    gap: '112px',
    flexShrink: 0,
    borderRadius: '14px',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    background: '#FFF',
    boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
    '&:hover, &:focus': {
      color: '#121417',
    },
    transition: 'color 0.4s ease',
  }),
  menuList: base => ({
    ...base,

    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      background: 'rgba(18, 20, 23, 0.05)',
    },
    '& .css-13w9d7g-menu:hover, & .css-13w9d7g-menu:focus': {
      color: 'black',
    },
  }),
};
