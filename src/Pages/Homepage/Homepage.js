import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import Table from "./Table";
import MiniDrawer from "../../modules/Drawer/Drawer";
const Homepage = () => {
  const navigate = useNavigate();
  const userLocal = localStorage.getItem("user");

  useEffect(() => {
    if (!userLocal) {
      return navigate("/");
    }
  }, []);

  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=5")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
  if (users)
    return (
      <>
        <MiniDrawer>
          <Box component="main" sx={{ position: "relative", pt: "54px" }}>
            <Table
              title="Son sorgular"
              headerData={["Adı", "Tipi", "Tarixi", "Statusu"]}
              bodyData={users.map((item) => [
                `${item.firstName} ${item.lastName}`,
                `${item.maidenName}`,
                `${item.birthDate}`,
                `${item.address.city}`,
              ])}
            />
            <Table
              title="Mənim sorgularım"
              headerData={["Tipi", "Tarixi", "Statusu"]}
              bodyData={users.map((item) => [
                `${item.maidenName}`,
                `${item.birthDate}`,
                `${item.address.city}`,
              ])}
            />
            <Table
              title="Əməkdaşlar haqqında son məlumat"
              headerData={["Adı", "Vəzifə", "Status"]}
              bodyData={users.map((item) => [
                `${item.firstName} ${item.lastName}`,
                `${item.company.title}`,
                `${item.bank.cardType}`,
              ])}
            />
            <Table
              title="Qarşıdan gələn ildönümü"
              headerData={["Adı", "İl", "Tarixi"]}
              bodyData={users.map((item) => [
                `${item.firstName} ${item.lastName}`,
                `${item.height}`,
                `${item.birthDate}`,
              ])}
            />
            <Table
              title="Bu günki Day off-lar"
              headerData={["Adı", "Tipi"]}
              bodyData={users.map((item) => [
                `${item.firstName} ${item.lastName}`,
                `${item.bank.cardType}`,
              ])}
            />
            <Table
              title="Məzuniyyət məlumatı"
              headerData={["Adı", "Tarixi","Əvəzedici şəxs"]}
              bodyData={users.map((item) => [
                `${item.firstName} ${item.lastName}`,
                `${item.birthDate}`,
                `${item.firstName} ${item.lastName}`,
              ])}
            />
            <Table
              title="Növbəti ad günləri"
              headerData={["Adı", "Tarixi"]}
              bodyData={users.map((item) => [
                `${item.firstName} ${item.lastName}`,
                `${item.birthDate}`,
              ])}
            />
            <Table
              title="Ezamiyyət"
              headerData={["Adı", "Tarixi"]}
              bodyData={users.map((item) => [
                `${item.firstName} ${item.lastName}`,
                `${item.birthDate}`,
              ])}
            />
          </Box>
        </MiniDrawer>
      </>
    );
};

export default Homepage;
