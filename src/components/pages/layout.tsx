import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  AppBar,
  CssBaseline,
  Divider,
  Hidden,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";
import {
  makeStyles,
  useTheme,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import amber from "@material-ui/core/colors/amber";

import { StoreStructure } from "../../entities/StoreStructure";
import { changeTheme } from "../../actions";
import { navigationList } from "../../data-structures/navigation-list";

const drawerWidth = 320;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

interface LayoutType {
  darkTheme: boolean;
  fontSize: number;
  children: any;
}

function Layout(props: LayoutType): any {
  const classes = useStyles();
  const theme = useTheme();

  const globalTheme = createMuiTheme({
    palette: {
      primary: {
        light: amber[600],
        main: amber[500],
        dark: amber[400]
      },
      type: props.darkTheme ? "dark" : "light"
    },
    typography: {
      fontSize: props.fontSize
    }
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {navigationList.map((item, id) => (
          <Link to={item.link} style={{ textDecoration: "none", color: "initial" }}>
            <ListItem button key={item.title}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <MuiThemeProvider theme={globalTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              News App
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {props.children}
        </main>
      </div>
    </MuiThemeProvider>
  );
}

const mapStateToProps = ({
  uiParams: { darkTheme, fontSize }
}: StoreStructure): any => {
  return { darkTheme, fontSize };
};

const mapDispatchToProps = (dispatch: any, { articleService }: any) => {
  return {
    changeTheme: changeTheme(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
