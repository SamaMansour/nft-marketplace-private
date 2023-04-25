import React, {useState} from "react";
import { FileUploader } from "react-drag-drop-files";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Container, Row, Col } from "reactstrap";
import NftCard from "../components/ui/Nft-card/NftCard";
import img from "../assets/images/img-01.png";
import avatar from "../assets/images/ava-01.png";
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import uploadImg from "../assets/svg/uploadImage.svg";
// import { MultiSelect } from '@coreui/coreui';
import Multiselect from 'multiselect-react-dropdown';





import "../styles/CreateItem.scss";

const item = {
  id: "01",
  title: "Guard",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
  imgUrl: img,
  creator: "Trista Francis",
  creatorImg: avatar,
  currentBid: 7.89,
};


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

 
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


const options = [
  { name: "Srigar", id: 1 },
  { name: "Sam", id: 2 }
];


function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const CreateItem = () => {
  const fileTypes = ["JPEG", "PNG", "PDF"];
  const [file, setFile] = useState(null);
  console.log(file);
  const handleChange = (file: any) => {
    setFile(file);
  };
  const [value, setValue] = React.useState(0);

  const handleTabsChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleListChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

 const [selectedFile, setSelectedFile] = useState(null);
 const [selectedName, setSelectedName] = useState("");

 const [items, setItems] = React.useState([]);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(items);
  };

  const handleSelect = (selectedList: any) => {
    setItems(selectedList);
  };

  const handleRemove = (selectedList: any) => {
    setItems(selectedList);
  };



 


 const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setSelectedName(file.name);
        
  };

  return (
    <>
      <section>
     
        <Container>
          <Row>
            <h1 className="title">Create your item</h1>
            <h6 className="subtitle">Rankings by sales volume</h6>
            <Col lg="10" className="mb-5" style={{ marginTop:'230px'}}>
              <NftCard item={item} />
            </Col>
            <Col>
              <div className="create__item">
                <form>
                <div>
                  <div className="file-upload">
                    <img src={ uploadImg } alt="upload" />
                    <h3> {selectedName || "Click box to upload"}</h3>
                    <p>Maximun file size 10mb</p>
                    <input className="upload__file__btn" type="file" onChange={handleFileChange} />
                  </div>
                </div>
                <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleTabsChange} aria-label="basic tabs example">
                    <Tab className="tab-label" label="Fixed Price" {...a11yProps(0)} />
                    <Tab className="tab-label" label="Time Auction" {...a11yProps(1)} />
                    <Tab className="tab-label"label="Open for Bid" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                <div className=" d-flex align-items-center gap-4">
                  <div className="form__input w-50">
                      <label htmlFor="">Item name</label>
                      <input type="text" placeholder="Enter title" className="input__field" />
                  </div>
                  <div className="form__input w-50">
                      <label htmlFor="">Price</label>
                      <input
                        type="number"
                        className="input__field"
                        placeholder="Enter price for one item (ETH)"
                      />
                    </div>
                  </div>

                  {/* <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" placeholder="Enter minimum bid" className="input__field"/>
                  </div> */}
{/* 
                  <div className=" d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input type="date" className="input__field" />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input type="date" className="input__field"/>
                    </div>
                  </div> */}
                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea
                      name=""
                      id=""
                      placeholder="Enter description"
                      className="w-100 input__field"
                    ></textarea>
                  </div>
                  <div className=" d-flex align-items-center gap-4">
                  <div className="form__input w-50">
                      <label htmlFor="">Royalities</label>
                      <input type="text" placeholder="Enter title" className="input__field" />
                  </div>
                  <div className="form__input w-50">
                    <label htmlFor="">size</label>
                    <input type="text" placeholder="Enter title" className="input__field" />
                  </div>
                  <div className="w-50">
                    <label htmlFor="">Select Category</label>
                    <Multiselect
                      options={options} // Options to display in the dropdown
                      selectedValues={items} // Preselected value to persist in dropdown
                      onSelect={handleSelect} // Function will trigger on select event
                      onRemove={handleRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                      showArrow={true}
                    />
                    
                  </div>
                  <div className="form__input w-50">
                    {/*<FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                      <Select
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        className="input__field"
                        style={{height:"60px"}}
                        input={<OutlinedInput />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em>Placeholder</em>;
                          }

                          return selected.join(', ');
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem disabled value="">
                          <em>Placeholder</em>
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>*/}
                  </div>
                  
                  </div>

                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
              </Box>
                  {/* <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input
                      type="number"
                      placeholder="Enter price for one item (ETH)"
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" placeholder="Enter minimum bid" />
                  </div>

                  <div className=" d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input type="date" />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input type="date" />
                    </div>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Enter title" />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea
                      name=""
                      id=""
                      placeholder="Enter description"
                      className="w-100"
                    ></textarea>
                  </div> */}
                  <button type="submit" className="submit__btn">Create Item</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CreateItem;