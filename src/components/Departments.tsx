import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface Department {
  department: string;
  sub_departments: string[];
}

interface SubDepartmentsProps {
  sub_dept: string;
  check: boolean;
}

const SubDepartments: React.FC<SubDepartmentsProps> = ({ sub_dept, check }) => {
  const [checked, setChecked] = React.useState(check);

  React.useEffect(() => {
    setChecked(check);
  }, [check]);

  return (
    <FormControlLabel
      label={sub_dept}
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
    />
  );
};

const departmentsData: Department[] = [
  {
    department: "customer_service",
    sub_departments: ["support","customer_success"],
  },
  {
    department:"design",
    sub_departments: ["graphic_design","product_design","web_design"],
  },
  // Add more departments and sub-departments as needed
];

const DepartmentsList: React.FC = () => {
  const [checks, setChecks] = React.useState<boolean[]>(departmentsData.map(() => false));
  const [expandsOpen, setExpandsOpen] = React.useState<boolean[]>(departmentsData.map(() => true));

  const handleChecks = (checked: boolean, index: number) => {
    const tempChecks = [...checks];
    tempChecks[index] = checked;
    setChecks(tempChecks);
  };

  return (
    <div>
      {departmentsData.map((department: Department, index: number) => {
        const [expand, setExpand] = React.useState<boolean>(false);

        return (
          <div key={index}>
            <FormControlLabel
              label={department.department}
              control={
                <Checkbox
                  checked={checks[index]}
                  onChange={(e) => handleChecks(e.target.checked, index)}
                />
              }
            />
            {expand ? (
              <ExpandLessIcon onClick={() => setExpand(!expand)} />
            ) : (
              <ExpandMoreIcon onClick={() => setExpand(!expand)} />
            )}
            {expand &&
              department.sub_departments.map((sub_dept: string) => (
                <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }} key={sub_dept}>
                  <SubDepartments sub_dept={sub_dept} check={checks[index]} />
                </Box>
              ))}
          </div>
        );
      })}
    </div>
  );
};

export default DepartmentsList;
