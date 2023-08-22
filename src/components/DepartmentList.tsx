import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function IndeterminateCheckbox() {
  const [agricultureChecked, setAgricultureChecked] = React.useState([true, false, false, false, false]);
  
  const [showAgricultureChildren, setShowAgricultureChildren] = React.useState(true);

  const toggleAgricultureChildren = () => {
    setShowAgricultureChildren(!showAgricultureChildren);
  };

  const toggleAllAgricultureChildren = () => {
    const allChecked = agricultureChecked.every(checked => checked);
    setAgricultureChecked(Array.from({ length: agricultureChecked.length }, () => !allChecked));
  };

  const agricultureChildren = showAgricultureChildren && (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3,background:"#D3D3D3",borderRadius:"2%" }}>
      <FormControlLabel
        label="Crops"
        control={<Checkbox checked={agricultureChecked[1]} onChange={() => setAgricultureChecked(prev => [prev[0], !prev[1], ...prev.slice(2)])} />}
      />
      <FormControlLabel
        label="Farming Animals & Livestock"
        control={<Checkbox checked={agricultureChecked[2]} onChange={() => setAgricultureChecked(prev => [prev[0], prev[1], !prev[2], ...prev.slice(3)])} />}
      />
      <FormControlLabel
        label="Fishery and Aqua Culture"
        control={<Checkbox checked={agricultureChecked[3]} onChange={() => setAgricultureChecked(prev => [prev[0], prev[1], prev[2], !prev[3], ...prev.slice(4)])} />}
      />
      <FormControlLabel
        label="Ranching"
        control={<Checkbox checked={agricultureChecked[4]} onChange={() => setAgricultureChecked(prev => [prev[0], prev[1], prev[2], prev[3], !prev[4]])} />}
      />
      
    </Box>
  );

  return (
    <div>
      <FormControlLabel sx={{color:"#D32D41"}}
        label="Agriculture & Fishing"
        control={
          <div>
            <Checkbox
              checked={agricultureChecked.every(checked => checked)}
              indeterminate={!agricultureChecked.every(checked => checked) && agricultureChecked.some(checked => checked)}
              onChange={toggleAllAgricultureChildren}
            />
            {showAgricultureChildren ? (
              <ExpandLessIcon onClick={toggleAgricultureChildren} />
            ) : (
              <ExpandMoreIcon onClick={toggleAgricultureChildren} />
            )}
          </div>
        }
      />
      {agricultureChildren}
    </div>
  );
}
