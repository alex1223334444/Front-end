import { AppBar, Toolbar } from "@material-ui/core";


const tool = () => {
    return <Toolbar style={{ fontSize: '30px', top: '-10px' }}>Healty recipes</Toolbar>;
  };
  const Header = () => {
    return (
      <div>
      <header>
        <AppBar style={{ backgroundColor: 'green', height: '45px' }}>{tool()}</AppBar>
      </header>
      </div>
    );
  }
  
  export default Header;
  
  