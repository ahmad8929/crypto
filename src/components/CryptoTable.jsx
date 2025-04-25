import React from 'react';
import { Table, Image } from 'antd';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
import { selectCryptoAssets } from '../redux/cryptoSlice';

const CryptoTable = () => {
  const cryptoData = useSelector(selectCryptoAssets);
console.log(selectCryptoAssets);
  const columns = [
    {
      title: 'Logo',
      dataIndex: 'image',
      key: 'image',
      render: (src) => <Image src={src} alt="logo" width={30} preview={false} />, 
      fixed: 'left'
    },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      render: (symbol) => symbol.toUpperCase(),
    },
    {
      title: 'Price',
      dataIndex: 'current_price',
      key: 'price',
      render: (price) => `$${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}`,
    },
    {
      title: '1h %',
      key: '1h',
      render: (record) => (
        <span style={{ color: record.price_change_percentage_1h_in_currency > 0 ? 'green' : 'red' }}>
          {record.price_change_percentage_1h_in_currency?.toFixed(2)}%
        </span>
      ),
    },
    {
      title: '24h %',
      key: '24h',
      render: (record) => (
        <span style={{ color: record.price_change_percentage_24h > 0 ? 'green' : 'red' }}>
          {record.price_change_percentage_24h?.toFixed(2)}%
        </span>
      ),
    },
    {
      title: '7d %',
      key: '7d',
      render: (record) => (
        <span style={{ color: record.price_change_percentage_7d_in_currency > 0 ? 'green' : 'red' }}>
          {record.price_change_percentage_7d_in_currency?.toFixed(2)}%
        </span>
      ),
    },
    {
      title: 'Market Cap',
      dataIndex: 'market_cap',
      key: 'marketCap',
      render: (cap) => `$${cap.toLocaleString()}`,
    },
    {
      title: '24h Volume',
      dataIndex: 'total_volume',
      key: 'volume',
      render: (vol) => `$${vol.toLocaleString()}`,
    },
    {
      title: 'Circulating Supply',
      dataIndex: 'circulating_supply',
      key: 'circulating',
      render: (supply) => supply?.toLocaleString(),
    },
    {
      title: 'Max Supply',
      dataIndex: 'max_supply',
      key: 'maxSupply',
      render: (max) => max ? max.toLocaleString() : '—',
    },
    {
      title: '7D Chart',
      key: 'sparkline',
      render: (record) => (
        <ResponsiveContainer width={100} height={50}>
          <LineChart data={record.sparkline_in_7d.price.map((p, i) => ({ price: p, time: i }))}>
            <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      ),
    },
  ];

  return (
    <div style={{ overflowX: 'auto' }}>
      <Table
        columns={columns}
        dataSource={cryptoData}
        rowKey="id"
        scroll={{ x: 1500 }}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default CryptoTable;