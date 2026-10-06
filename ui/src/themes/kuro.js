import stylesheet from './kuro.css.js'

// Based on the Kuro stylesheet from Gazelle (WhatCD/Gazelle static/styles/kuro)
const page = '#222222'
const content = '#303030'
const box = '#282828'
const head = '#121212'
const bar = '#1c1c1c'
const button = '#454545'
const text = '#999999'
const link = '#cccccc'
const linkHover = '#aaaaaa'
const font = 'tahoma, helvetica, sans-serif'

const activeLink = {
  backgroundColor: content,
  color: '#ffffff !important',
  '& .MuiListItemIcon-root': {
    color: '#ffffff',
  },
}

export default {
  themeName: 'Kuro',
  palette: {
    primary: {
      main: link,
      contrastText: page,
    },
    secondary: {
      main: button,
      contrastText: '#ffffff',
    },
    error: {
      main: '#af2525',
    },
    type: 'dark',
    background: {
      default: page,
      paper: box,
    },
    text: {
      primary: link,
      secondary: text,
    },
    divider: content,
  },
  typography: {
    fontFamily: font,
    fontSize: 13,
  },
  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: box,
      },
      elevation1: {
        boxShadow: 'none',
        border: `1px solid ${content}`,
      },
    },
    MuiAppBar: {
      colorSecondary: {
        backgroundColor: bar,
        color: '#777777',
      },
      root: {
        boxShadow: 'none',
        borderBottom: `1px solid ${content}`,
      },
    },
    MuiToolbar: {
      root: {
        backgroundColor: 'transparent',
      },
    },
    MuiTypography: {
      h5: {
        color: '#ffffff',
        fontWeight: 'bold',
      },
      h6: {
        color: '#ffffff',
        fontWeight: 'bold',
      },
      colorTextSecondary: {
        color: text,
      },
    },
    MuiButton: {
      root: {
        color: '#ffffff',
        textTransform: 'none',
      },
      contained: {
        backgroundColor: button,
        color: '#ffffff',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: content,
          boxShadow: 'none',
        },
      },
      containedPrimary: {
        backgroundColor: button,
        color: '#ffffff',
        '&:hover': {
          backgroundColor: content,
        },
      },
      textPrimary: {
        color: link,
      },
      textSecondary: {
        color: link,
      },
    },
    MuiIconButton: {
      root: {
        color: link,
      },
    },
    MuiFab: {
      primary: {
        backgroundColor: button,
        color: '#ffffff',
        '&:hover': {
          backgroundColor: content,
        },
      },
    },
    MuiFormGroup: {
      root: {
        color: link,
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: page,
        border: `1px solid ${content}`,
        '&:hover': {
          backgroundColor: page,
        },
        '&$focused': {
          backgroundColor: page,
        },
      },
      underline: {
        '&:before, &:after': {
          display: 'none',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: page,
      },
      notchedOutline: {
        borderColor: content,
      },
    },
    MuiInputBase: {
      root: {
        color: link,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: button,
        color: '#ffffff',
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: content,
      },
    },
    MuiListItemIcon: {
      root: {
        color: link,
      },
    },
    MuiMenuItem: {
      root: {
        '&:hover': {
          backgroundColor: content,
        },
      },
    },
    MuiTableRow: {
      root: {
        backgroundColor: page,
        '&$hover:hover': {
          backgroundColor: content,
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: `1px solid ${content}`,
      },
      head: {
        backgroundColor: `${head} !important`,
        color: '#ffffff',
        fontWeight: 'bold',
      },
      body: {
        color: text,
      },
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: page,
        color: link,
        border: `1px solid ${content}`,
        fontWeight: 'bold',
      },
    },
    MuiSwitch: {
      colorSecondary: {
        '&$checked': {
          color: link,
        },
        '&$checked + $track': {
          backgroundColor: text,
        },
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        '&$checked': {
          color: link,
        },
      },
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: button,
      },
    },
    RaLayout: {
      root: {
        backgroundColor: page,
      },
      content: {
        backgroundColor: content,
      },
    },
    RaSidebar: {
      fixed: {
        backgroundColor: page,
      },
    },
    RaMenuItemLink: {
      root: {
        color: link,
        '&:hover': {
          backgroundColor: content,
          color: '#ffffff',
        },
        '&[aria-current="page"]': activeLink,
      },
      active: activeLink,
    },
    RaListToolbar: {
      toolbar: {
        backgroundColor: content,
      },
    },
    RaLink: {
      link: {
        color: link,
        '&:hover': {
          color: linkHover,
        },
      },
    },
    RaDatagrid: {
      headerCell: {
        backgroundColor: head,
        color: '#ffffff',
      },
    },
    NDAlbumGridView: {
      albumName: {
        color: link,
      },
      albumSubtitle: {
        color: text,
      },
    },
    NDAlbumDetails: {
      root: {
        boxShadow: 'none',
        border: `1px solid ${content}`,
      },
      recordName: {
        color: '#ffffff',
        fontWeight: 'bold',
      },
      recordArtist: {
        color: link,
      },
      recordMeta: {
        color: text,
      },
    },
    NDPlaylistDetails: {
      container: {
        boxShadow: 'none',
        border: `1px solid ${content}`,
      },
      title: {
        color: '#ffffff',
        fontWeight: 'bold',
      },
      details: {
        color: text,
      },
    },
    NDCollapsibleComment: {
      commentBlock: {
        color: text,
      },
    },
    NDAudioPlayer: {
      audioTitle: {
        color: link,
      },
      songInfo: {
        color: text,
      },
    },
    NDLogin: {
      main: {
        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, .75)',
      },
      systemNameLink: {
        color: '#ffffff',
      },
      welcome: {
        color: text,
      },
      card: {
        minWidth: 300,
        backgroundColor: box,
        border: `1px solid ${content}`,
        boxShadow: 'none',
      },
      button: {
        boxShadow: 'none',
      },
    },
    NDMobileArtistDetails: {
      bgContainer: {
        background: `linear-gradient(to bottom, rgba(34 34 34 / 72%), ${content})!important`,
      },
    },
    NDArtistPage: {
      bgContainer: {
        background: `linear-gradient(to bottom, rgba(34 34 34 / 72%), ${content})!important`,
      },
    },
  },
  player: {
    theme: 'dark',
    stylesheet,
  },
}
