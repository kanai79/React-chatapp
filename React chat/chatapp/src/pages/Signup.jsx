import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles"
import { TextField, Button, } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom"
import { auth } from "../firebase"


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
})

const Signup = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        //then 成功した時
        response.user
          .updateProfile({
            displayName: username,
          })
          .then(() => {
            // updateProfileが終わった後
            setLoading(false)
            history.push("/");
          });
      })
      .catch((error) => {
        //catch 失敗した時
        console.log("登録失敗", error);
        setLoading(false)
      });
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>ユーザー登録ページ</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          label="user name"
          variant="filled"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          label="E-mail"
          variant="filled"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          label="pass word"
          variant="filled"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button disabled={loading} type="submit" variant="contained" color="secondary" >登録</Button>
      </form>
      <Link to="login">既にアカウントをお持ちの方</Link>
    </div>
  );
};

export default Signup;

