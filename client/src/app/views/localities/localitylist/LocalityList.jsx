import React, { useState } from "react";
import { Breadcrumb } from "matx";
import MaterialTable from 'material-table';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
    Button,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import DialogContentText from "@material-ui/core/DialogContentText";

import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { useHistory, useLocation } from "react-router";

const useStyles = makeStyles(theme => ({
    radiobtn: {
        border: '1px solid silver',
        paddingLeft: '10px',
        borderRadius: '4px'
    },

    activeStyle: {
        background: '#a6e6a6',
        padding: '6px',
        width: '45%',
    },

    inactiveStyle: {
        background: '#e4ba6c',
        padding: '6px',
        width: '45%',
    }
}));

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const animatedComponents = makeAnimated();

const LocalityList = () => {

    const classes = useStyles();
    const history = useHistory();

    const [open, setOpen] = React.useState(false);
    const [editDailogOpen, setEditDailogOpen] = React.useState(false);

    const [alertDailog, setAlertDailog] = React.useState(false);

    const [selectedValue, setSelectedValue] = React.useState('1');

    const [citiesValue, setCitiesValue] = useState();
    const [warehouseValue, setWarehouseValue] = useState();
    const [hubValue, setHubValue] = useState();
    const [storeValue, setStoreValue] = useState();

    const [editformData, setEditformData] = React.useState({
        id: '',
        name: '',
        description: '',
    })

    const [addformData, setAddformData] = React.useState({
        name: '',
        description: '',
    })

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const GreenRadio = withStyles({
        root: {
            color: green[400],
            "&$checked": {
                color: green[600]
            }
        },
        checked: {}
    })(props => <Radio color="default" {...props} />);

    function handleClose() {
        setDefaultFields()
    }

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    function onLoadAddFormFieldChange(event) {
        setAddformData({
            ...addformData,
            [event.target.name]: event.target.value,
        })
    }

    function onChangeEditFields(event) {

        setEditformData({
            ...editformData,
            [event.target.name]: event.target.value,
        })
    }

    function handleClickEditDailogOpen(data) {
        setEditformData({
            id: data.id,
            name: data.name,
            description: data.description
        })
        setSelectedValue(data.status.toString())
        onloadcityDetails(data);
        onloadWarehouseDetails(data);
        onloadHubDetails(data);
        onloadStoreDetails(data);
        setEditDailogOpen(true);
    }

    function onLoadEditSubmit() {
        if (editformData.name === "" || citiesValue === null || citiesValue === undefined ||
            warehouseValue === null || warehouseValue === undefined || hubValue === null ||
            hubValue === undefined || storeValue === null ||
            storeValue === undefined) {
            setEditDailogOpen(true);
            setAlertDailog(true);
        } else {
            let editedData = {
                addformData: editformData,
                status: selectedValue,
                selectedCities: citiesValue,
                selectedWarehouse: warehouseValue,
                selectedhub: hubValue,
                selectedStore:storeValue
            }
            console.log(editedData);

            setEditformData({
                id: '',
                name: '',
                description: ''
            })
            setDefaultFields()
        }
    };

    function alertHandleClose() {
        setAlertDailog(false);
    }

    function handleFormSubmit() {
        if (addformData.name === "" || citiesValue === null || citiesValue === undefined ||
            warehouseValue === null || warehouseValue === undefined || hubValue === null ||
            hubValue === undefined || storeValue === null ||
            storeValue === undefined) {
            setOpen(true)
            setAlertDailog(true);
        } else {
            let addedData = {
                addformData: addformData,
                status: selectedValue,
                selectedCities: citiesValue,
                selectedWarehouse: warehouseValue,
                selectedhub: hubValue,
                selectedStore:storeValue
            }

            console.log(addedData);

            setDefaultFields()
            setAddformData({
                name: "",
                description: "",
            })
        }
    }

    function setDefaultFields() {
        setOpen(false);
        setEditDailogOpen(false);
        setAlertDailog(false);
        setSelectedValue('1');
        setCitiesValue(null);
        setWarehouseValue(null);
        setHubValue(null);
        setStoreValue(null);
    }

    const onloadSelectCities = (value) => {
        if (value !== null) {
            redirectToRequiredPage(value);
        }

        setCitiesValue(value);
    };

    const onloadSelectWarehouse = (value) => {
        if (value !== null) {
            redirectToRequiredPage(value);
        }
        setWarehouseValue(value)
    }

    const onloadSelecthub = (value) => {
        if (value !== null) {
            redirectToRequiredPage(value);
        }
        setHubValue(value);
    }

    const onloadSelectStore = (value) => {
        if (value !== null) {
            redirectToRequiredPage(value);
        }
        setStoreValue(value);
    }

    function redirectToRequiredPage(selectedData) {
        if (selectedData.id === 0) {
            if (selectedData.state === 0) {
                history.push({
                    pathname: '/locality/citylist',
                    state: {
                        name: 'addcity',
                        id: 0,
                        page: 'locality'
                    }
                })
            } else if (selectedData.state === 1) {
                history.push({
                    pathname: '/locality/warehouse',
                    state: {
                        name: 'addwarehouse',
                        id: 0,
                        page: 'locality'
                    }
                })
            } else if (selectedData.state === 2) {
                history.push({
                    pathname: '/locality/hublist',
                    state: {
                        name: 'addhub',
                        id: 0,
                        page: 'locality'
                    }
                })
            } else if (selectedData.state === 3) {
                history.push({
                    pathname: '/locality/storelist',
                    state: {
                        name: 'addlocality',
                        id: 0,
                        page: 'locality'
                    }
                })
            }
        }
    }

    function onloadcityDetails(cityDetails) {
        let data = [];
        data.push(
            {
                label: cityDetails.cityLabel,
                value: cityDetails.cityName,
                id: cityDetails.cityId,
            }
        );
        onloadSelectCities(data);
    }

    function onloadWarehouseDetails(warehouseDetails) {
        let data = [];
        data.push(
            {
                label: warehouseDetails.warehouseLabel,
                value: warehouseDetails.warehouseName,
                id: warehouseDetails.warehouseId,
            }
        );

        onloadSelectWarehouse(data);
    }

    function onloadHubDetails(hubDetails) {
        let data = [];
        data.push(
            {
                label: hubDetails.hubLabel,
                value: hubDetails.hubName,
                id: hubDetails.hubId,
            }
        );

        onloadSelecthub(data);
    }

    function onloadStoreDetails(storeDetails) {
        let data = [];
        data.push(
            {
                label: storeDetails.storeLabel,
                value: storeDetails.storeName,
                id: storeDetails.storeId,
            }
        );

        onloadSelectStore(data);
    }

    const cities = [
        { value: "addcity", label: "Add City  + ", id: 0, state: 0 },
        { value: "cityone", label: "City One", id: 1 },
        { value: "citytwo", label: "City Two", id: 2 },
        { value: "citythree", label: "City Three", id: 3 }
    ];

    const warehouseList = [
        { value: "addwarehouse", label: "Add Warehouse  + ", id: 0, state: 1 },
        { value: "warehouse", label: "Warehouse One", id: 1 },
    ];

    const hubList = [
        { value: "addhub", label: "Add Hub  + ", id: 0, state: 2 },
        { value: "hubone", label: "Hub One", id: 1 },
        { value: "hubtwo", label: "Hub Two", id: 2 },
    ];

    const storeList = [
        { value: "addstore", label: "Add Store  + ", id: 0, state: 3 },
        { value: "storeone", label: "Store One", id: 1 },
        { value: "storetwo", label: "Store Two", id: 2 },
    ];

    const data = [
        {
            id: 1,
            name: 'ABC',
            description: 'abc',
            status: 1,
            warehouse: 'a', warehouseName: "warehouse", warehouseLabel: "Warehouse  + ", warehouseId: 0, state: 0,
            city: 'Bengaluru', cityName: "city", cityLabel: "City", cityId: 1,
            hub: 'aaaa', hubName: "hub", hubLabel: "Hub ", hubId: 1,
            store: 'aaaa', storeName: "store", storeLabel: "Store ", storeId: 1,
        },
        {
            id: 2,
            name: 'PQR',
            description: 'pqr',
            status: 0,
            warehouse: 'abc', warehouseName: "warehouseone", warehouseLabel: "Warehouse One", warehouseId: 2,
            city: 'Bengaluru', cityName: "cityone", cityLabel: "City One", cityId: 2,
            hub: 'aaaa', hubName: "addhub", hubLabel: "Add One", HubId: 2,
            store: 'aaaa', storeName: "store", storeLabel: "Store One", storeId: 2,
        },
        {
            id: 3,
            name: 'xyz',
            description: 'xyz',
            status: 0,
            warehouse: 'xyz', warehouseName: "warehousetwo", warehouseLabel: "Warehouse Two", warehouseId: 3,
            city: 'Bengaluru', cityName: "citytwo", cityLabel: "City Two", cityId: 3,
            hub: 'aaaa', hubName: "addhub", hubLabel: "Add Two", hubId: 3,
            store: 'aaaa', storeName: "store", storeLabel: "Store Two", storeId: 3,
        },
    ]

    const columns = [
        {
            title: 'Id', field: 'id',
        },
        {
            title: 'Hub Name', field: 'name',
        },
        {
            title: 'Warehouse Name', field: 'warehouse',
        },
        {
            title: 'City Name', field: 'city',
        },
        {
            title: 'Description', field: 'description',
        },
        {
            title: 'Status', field: 'status', render: rowData => <div>{rowData.status === 1 ? <div className={classes.activeStyle}>Active</div> : <div className={classes.inactiveStyle}>Inactive</div>}</div>
        },
    ]

    const actions = [
        {
            icon: 'add',
            tooltip: 'Add Locality',
            isFreeAction: true,
            onClick: (event) => onLoadAddDailogOpen()
        },
        {
            icon: 'edit',
            tooltip: 'edit Locality',
            onClick: (event, rowData) => handleClickEditDailogOpen(rowData, event)
        },
        {
            icon: 'delete',
            tooltip: 'Delete Locality',
            onClick: (event, rowData) => alert("You saved " + rowData.name)
        },
    ]

    function onLoadAddDailogOpen() {
        setOpen(true);
    }

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: "Locality", path: "/locality/localitylist" },
                        { name: "Locality" }
                    ]}
                />
            </div><hr></hr>
            <div>
                <Dialog
                    maxWidth={'md'}
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        {"Add Locality"}
                    </DialogTitle>
                    <DialogContent>
                        <div className="row">
                            <div className="col-sm-8">
                                <label> Locality Name <sup>*</sup></label>
                                <input
                                    className="mb-16 w-100 form-control"
                                    type="text"
                                    onChange={onLoadAddFormFieldChange}
                                    name="name"
                                    value={addformData.name}
                                />
                            </div>

                            <div className="col-sm-4">
                                <label>Status<sup>*</sup></label>
                                <div className={classes.radiobtn}>
                                    <label>Active</label>
                                    <Radio
                                        checked={selectedValue === '1'}
                                        onChange={handleChange}
                                        value="1"
                                        name="status"
                                    />
                                    <label>InActive</label>
                                    <Radio
                                        checked={selectedValue === '0'}
                                        onChange={handleChange}
                                        value="0"
                                        name="status"
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <label>Locality Description</label>
                                <textarea
                                    className="mb-16 w-100 form-control"
                                    rows="2"
                                    name="description"
                                    onChange={onLoadAddFormFieldChange}
                                    value={addformData.description}
                                />
                            </div>

                            <div className="col-sm-12">
                                <label>Select City <sup>*</sup></label>
                                <Select
                                    name="form-field-name"
                                    value={citiesValue}
                                    onChange={onloadSelectCities}
                                    options={cities}
                                />
                            </div>

                            <div className="col-sm-12">
                                <label>Select Warehouse <sup>*</sup></label>
                                <Select
                                    name="form-field-name"
                                    value={warehouseValue}
                                    onChange={onloadSelectWarehouse}
                                    options={warehouseList}
                                />
                            </div>

                            <div className="col-sm-12">
                                <label>Select Hub <sup>*</sup></label>
                                <Select
                                    name="form-field-name"
                                    value={hubValue}
                                    onChange={onloadSelecthub}
                                    options={hubList}
                                />
                            </div>
                            <div className="col-sm-12">
                                <label>Select Store <sup>*</sup></label>
                                <Select
                                    name="form-field-name"
                                    value={storeValue}
                                    onChange={onloadSelectStore}
                                    options={storeList}
                                />
                            </div>
                        </div><hr></hr>
                        <DialogActions>
                            <Button onClick={handleClose} variant="contained" color="secondary">
                                Cancel
                            </Button>
                            <Button onClick={handleFormSubmit} variant="contained" color="primary" autoFocus>
                                Submit
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>

                <Dialog
                    fullWidth={true}
                    maxWidth={'md'}
                    fullScreen={fullScreen}
                    open={editDailogOpen}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        {"Edit Locality"}
                    </DialogTitle>
                    <DialogContent>
                        <div className="row">
                            <div className="col-sm-8">
                                <label> Locality Name<sup>*</sup></label>
                                <input
                                    className="mb-16 w-100 form-control"
                                    type="text"
                                    name="name"
                                    onChange={onChangeEditFields}
                                    value={editformData.name}
                                />
                            </div>

                            <div className="col-sm-4">
                                <label> Locality Id<sup>*</sup></label>
                                <input
                                    className="mb-16 w-100 form-control"
                                    type="text"
                                    name="id"
                                    readOnly
                                    disabled
                                    onChange={onChangeEditFields}
                                    value={editformData.id}
                                />
                            </div>

                            <div className="col-sm-8">
                                <label>Locality Description</label>
                                <textarea
                                    className="mb-16 w-100 form-control"
                                    rows="2"
                                    name="description"
                                    onChange={onChangeEditFields}
                                    value={editformData.description}
                                />
                            </div>

                            <div className="col-sm-4">
                                <label>Status<sup>*</sup></label>
                                <div className={classes.radiobtn}>
                                    <label>Active</label>
                                    <Radio
                                        checked={selectedValue === '1'}
                                        onChange={handleChange}
                                        value="1"
                                        name="status"
                                    />
                                    <label>InActive</label>
                                    <Radio
                                        checked={selectedValue === '0'}
                                        onChange={handleChange}
                                        value="0"
                                        name="status"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <label>Select City <sup>*</sup></label>
                                <Select
                                    name="form-field-name"
                                    value={citiesValue}
                                    onChange={onloadSelectCities}
                                    options={cities}
                                />
                            </div>
                            <div className="col-sm-12">
                                <label>Select Warehouse <sup>*</sup></label>
                                <Select
                                    name="form-field-name"
                                    value={warehouseValue}
                                    onChange={onloadSelectWarehouse}
                                    options={warehouseList}
                                />
                            </div>

                            <div className="col-sm-12">
                                <label>Select Hub <sup>*</sup></label>
                                <Select
                                    name="form-field-name"
                                    value={hubValue}
                                    onChange={onloadSelecthub}
                                    options={hubList}
                                />
                            </div>
                            <div className="col-sm-12">
                                <label>Select Store <sup>*</sup></label>
                                <Select
                                    name="form-field-name"
                                    value={storeValue}
                                    onChange={onloadSelectStore}
                                    options={storeList}
                                />
                            </div>

                        </div>
                    </DialogContent><hr></hr>

                    <DialogActions>
                        <Button onClick={handleClose} variant="contained" color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={onLoadEditSubmit} variant="contained" color="primary" autoFocus>
                            Submit
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div>
                <Dialog
                    open={alertDailog}
                    onClose={alertHandleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Alert Message"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Please fill required fields
                    </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={alertHandleClose} variant="contained" color="primary" autoFocus>
                            OK
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <MaterialTable title="Locality List"
                data={data}
                columns={columns}
                actions={actions}
                options={{
                    search: true,
                    paging: true,
                    filtering: false,
                    IconButton: true,
                    button: true,
                    actionsColumnIndex: -1
                }}
            >
            </MaterialTable>

        </div >
    );
}

export default LocalityList;
