import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    container: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center"
    },
    paper: {
        padding: theme.spacing(2),
        width: theme.spacing(50),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "100%",
        justifyContent: 'center',
    },
    buttonSubmit: {
        marginBottom: 10,
        backgroundColor: "#01bfd9",
        color: "#fff"

    },
    btnCol: {
        backgroundColor: "#132c3c",
        color: "#fff",
        margin: "1vh",
        '&:hover': {
            boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
            backgroundColor: "#0b1921",
        }
    },
    clrBtn: {
        backgroundColor: "#1193a5",
        color: "#fff",
        margin: "1vh",
        fontWeight: "bold",
        '&:hover': {
            boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
            backgroundColor: "#0c6571",
        }
    }
}));