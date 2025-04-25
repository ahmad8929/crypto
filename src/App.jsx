
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCryptoData, updateAsset } from "./redux/cryptoSlice";
import CryptoTable from "./components/CryptoTable";
import { Layout, Typography } from "antd";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoData());

    const interval = setInterval(() => {
      dispatch(updateAsset());
    }, 1500);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: '#001529', display: 'flex', alignItems: 'center', padding: '0 24px' }}>
        <Title level={3} style={{ color: "#fff", margin: 0 }}>
          Live Crypto Tracker
        </Title>
      </Header>
      <Content style={{ padding: 24 }}>
        <CryptoTable />
      </Content>
      <Footer style={{ textAlign: 'center' }}>© 2025 Crypto Tracker. All rights reserved.</Footer>
    </Layout>
  );
}

export default App;