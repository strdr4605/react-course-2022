import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("Users component mounted")

        async function getUsers() {
            try {
                const response = await axios.get("https://reqres.in/api/users/");
                const nrOfPages = response.data.total_pages;

                let tempUsers = [];
                for (let i = 1; i <= nrOfPages; i++) {
                    const responsePerPage = await axios.get(`https://reqres.in/api/users?page=${i}`);
                    const fetchedUsers = responsePerPage.data.data;
                    tempUsers = tempUsers.concat(fetchedUsers);
                }
                
                setUsers(tempUsers);
            } catch (error) {
              // console.log({error});
            }
          }

          getUsers();
    }, []);

    useEffect(() => {
        // console.log(users);
    }, [users])

    const usersList = users.map((user) => <User key={user.id} user={user} />);

  return (
    <Container
      sx={{
        backgroundColor: "magenta",
        margin: "20px",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        rowGap: "15px",
        borderRadius: "4px"
      }}
    >
        {usersList}
    </Container>
  );
}
