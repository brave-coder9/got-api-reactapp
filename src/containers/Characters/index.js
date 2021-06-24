/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Table, Tag, Input, Select, Button, Pagination } from "antd";
import { Link, useHistory } from "react-router-dom";
import { CharactersContainer } from "./style";
import { apis } from "services/apis";

const { Option } = Select;

const columns = [
  {
    title: "Character",
    dataIndex: "",
    key: "name",
    render: (text, record) => (
      <>
        <Tag color={"geekblue"}>{record.name || "No name"}</Tag>
        {record.aliases.length > 0 && (
          <Tag color="volcano">{record.aliases.join(",")}</Tag>
        )}
      </>
    ),
  },
  {
    title: "Alive",
    dataIndex: "",
    key: "alive",
    render: (text, record) => {
      let title = "Yes";
      if (record.born === "") {
        title = "No";
      }
      if (record.died) {
        title = `No, died ${record.died}`;
      } else if (record.died === "") {
        title = "Unknown";
      }
      return <span>{title}</span>;
    },
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Culture",
    dataIndex: "culture",
    key: "culture",
    render: (text) => <span>{text || "Unknown"}</span>,
  },
  {
    title: "Allegiances",
    dataIndex: "allegiances",
    key: "allegiances",
    render: (text, record) => {
      return record.allegiances.length > 0 ? (
        record.allegiances
          .map((_allegiance) => {
            let tmpArr = _allegiance.split("/");
            return tmpArr[tmpArr.length - 1];
          })
          .map((_houseId, _i) => (
            <Link to={`houses/${_houseId}`}>
              <Tag color="green">{_houseId}</Tag>
            </Link>
          ))
      ) : (
        <span>No allegiances</span>
      );
    },
  },
];
function Characters() {
  const history = useHistory();
  const [characters, setCharacters] = useState([]);
  const [filterCulture, setFilterCulture] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState("10");

  const getCharacters = async () => {
    setIsLoading(true);
    try {
      const { ok, data } = await apis.getCharacters(
        page,
        pageSize,
        filterCulture,
        filterGender
      );
      if (ok) {
        setCharacters(data);
      }
    } catch (err) {
      console.error({ err });
    }
    setIsLoading(false);
  };

  const onChangeFilterGender = (value) => {
    setFilterGender(value);
  };

  const onFilter = async () => {
    getCharacters();
  };
  useEffect(() => {
    getCharacters();
  }, [history.location.pathname, page, pageSize]);

  return (
    <CharactersContainer>
      <div className="filter-options d-flex align-items-center justify-content-end">
        <Input
          className="search-option"
          placeholder="input a culture"
          value={filterCulture}
          onChange={(e) => setFilterCulture(e.target.value)}
        />
        <Select
          style={{ width: 120, marginRight: 10 }}
          defaultValue="any"
          onChange={onChangeFilterGender}
        >
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="">Any</Option>
        </Select>
        <Button onClick={onFilter}>Filter</Button>
      </div>
      <Table
        columns={columns}
        bordered
        dataSource={characters.map((_character, _i) => {
          _character.key = _i;
          return _character;
        })}
        pagination={false}
        loading={isLoading}
      />
      <Pagination
        className="mt-4"
        showSizeChanger
        showQuickJumper
        total={50}
        showTotal={(total) => `Total ${total} items`}
        pageSizeOptions={['10', '25', '50']}
        pageSize={pageSize}
        current={page}
        defaultPageSize={10}
        onChange={(page, pageSize) => setPage(page)}
        onShowSizeChange={(current, size) => setPageSize(size)}
      />
    </CharactersContainer>
  );
}

export default Characters;
