import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles"
import { TextField, Button, } from "@material-ui/core";
import { Link, useHistory, Redirect } from "react-router-dom";
import { auth } from "../firebase";
import {AuthContext} from "../pages/AuthService";

const useStyles = makeStyles({
  title: {
    textAlign: "center"
  },
  container: {
    width: "400px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    height: "300px",
    justifyContent: "space-between"
  },
  button: {
    width: "150px"
  },
  link: {

  }
})

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const { user } = useContext(AuthContext)
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log("ログイン成功", response)
        setLoading(false)
        history.push("/")
      })
      .catch((error) => {
        console.log("ログイン失敗", error);
        setLoading(false)
      })
  }
  if(user) {
    return <Redirect to="/" />
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>ログインページ</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          label="E-mail"
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="pass word"
          variant="filled"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={loading} variant="contained" color="primary" >ログイン</Button>
      </form>
      <Link to="signup">アカウントをお持ちでない方</Link>
    </div>
  );
};

export default Login;
