import { useEffect, useRef, useState } from "react";
import { deleteData, getSingleDoc, setData } from "../config/firebaseFirestore";
import styles from "../css/create.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useLocation, useParams, useNavigate } from "react-router-dom";
const CreateEditArticle = () => {
  const location = useLocation();
  if (location.pathname === "/create") {
    return <CreateEdit contents={[]} />;
  } else {
    return <EditArticle />;
  }
};

const EditArticle = () => {
  const { articleId } = useParams();
  const [contents, setContents] = useState([]);
  const fetchArticle = async () => {
    try {
      let rawContents = await getSingleDoc("articles", articleId);
      setContents(rawContents.contents);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchArticle();
  }, []);
  return <CreateEdit contents={contents} articleId={articleId} />;
};

export default CreateEditArticle;

const CreateEdit = (props) => {
  const [contents, setContents] = useState([]);
  const [articleId, setArticleId] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    setContents(props.contents);
    if (props.articleId) {
      setArticleId(props.articleId);
    }
  }, [props]);
  const AddNewContent = (content) => {
    setContents([...contents, content]);
  };

  const deleteContent = (contentId) => {
    let newContents = contents.filter((content) => content.id !== contentId);
    setContents(newContents);
  };

  const updateContent = (contentId, data) => {
    let idx = contents.findIndex((content) => content.id === contentId);
    let newContent = contents[idx];
    newContent.data = data;
    let newContents = [...contents];
    newContents[idx] = newContent;
    setContents(newContents);
  };

  const saveContents = async () => {
    try {
      if (articleId !== undefined && articleId !== "") {
        let hashedArticleId = articleId.replaceAll(" ", "-");
        setData("articles", hashedArticleId, { contents });
      }
    } catch (e) {}
  };

  const deleteArticle = async () => {
    try {
      if (props.articleId) {
        await deleteData("articles", articleId);
        navigate("/");
      }
    } catch (e) {}
  };

  return (
    <div className={styles.createContents}>
      <main className={styles.contentBox}>
        <input
          placeholder="Article Id"
          className={styles.articleId}
          value={articleId}
          onChange={(e) => {
            setArticleId(e.target.value);
          }}
        ></input>

        {contents.map((content) => {
          switch (content.type) {
            case "paragraph":
              return (
                <Paragraph
                  updateContent={updateContent}
                  deleteContent={deleteContent}
                  content={content}
                />
              );
            case "heading":
              return (
                <Heading
                  updateContent={updateContent}
                  deleteContent={deleteContent}
                  content={content}
                />
              );
            default:
              return <></>;
          }
        })}
      </main>
      <div className={styles.buttonsGroup}>
        <div>
          <button
            className={styles.newContentBtn}
            style={{ backgroundColor: "lightgreen" }}
            onClick={(e) => {
              saveContents();
            }}
          >
            Save
          </button>
          {props.articleId && (
            <button
              className={styles.newContentBtn}
              style={{ backgroundColor: "red", color: "white" }}
              onClick={(e) => {
                deleteArticle();
              }}
            >
              Delete
            </button>
          )}
        </div>
        <button
          className={styles.newContentBtn}
          onClick={(e) => {
            AddNewContent({
              id: Date.now().toString(),
              type: "paragraph",
              data: "",
            });
          }}
        >
          Add New Paragraph
        </button>
        <button
          className={styles.newContentBtn}
          onClick={(e) => {
            AddNewContent({
              id: Date.now().toString(),
              type: "heading",
              size: 1,
              data: "",
            });
          }}
        >
          Add New Heading 1
        </button>
        <button
          className={styles.newContentBtn}
          onClick={(e) => {
            AddNewContent({
              id: Date.now().toString(),
              type: "heading",
              size: 2,
              data: "",
            });
          }}
        >
          Add New Heading 2
        </button>
        <button
          className={styles.newContentBtn}
          onClick={(e) => {
            AddNewContent({
              id: Date.now().toString(),
              type: "heading",
              size: 3,
              data: "",
            });
          }}
        >
          Add New Heading 3
        </button>
        <button
          className={styles.newContentBtn}
          onClick={(e) => {
            AddNewContent({
              id: Date.now().toString(),
              type: "heading",
              size: 4,
              data: "",
            });
          }}
        >
          Add New Heading 4
        </button>
        <button
          className={styles.newContentBtn}
          onClick={(e) => {
            AddNewContent({
              id: Date.now().toString(),
              type: "heading",
              size: 5,
              data: "",
            });
          }}
        >
          Add New Heading 5
        </button>
        <button
          className={styles.newContentBtn}
          onClick={(e) => {
            AddNewContent({
              id: Date.now().toString(),
              type: "heading",
              size: 6,
              data: "",
            });
          }}
        >
          Add New Heading 6
        </button>
      </div>
    </div>
  );
};

const Paragraph = ({ content, deleteContent, updateContent }) => {
  const paragraphRef = useRef();
  const [value, setValue] = useState(content.data);
  useEffect(() => {
    paragraphRef.current.addEventListener("input", autoResize, false);
    paragraphRef.current.style.height =
      paragraphRef.current.scrollHeight + "px";
    function autoResize() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }
  }, [value]);
  return (
    <div className={styles.contentWrapper}>
      <IoMdCloseCircleOutline
        onClick={() => {
          deleteContent(content.id);
        }}
        size={25}
        className={styles.deleteContentBtn}
      />
      <textarea
        ref={paragraphRef}
        className={styles.para}
        defaultValue={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          updateContent(content.id, value);
        }}
      ></textarea>
    </div>
  );
};

const Heading = ({ content, deleteContent, updateContent }) => {
  const headingRef = useRef();
  const [value, setValue] = useState(content.data);
  useEffect(() => {
    headingRef.current.addEventListener("input", autoResize, false);
    headingRef.current.style.height = headingRef.current.scrollHeight + "px";
    function autoResize() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }
  }, [value]);

  const fontSize = () => {
    switch (content.size) {
      case 1:
        return { fontSize: "2em" };
      case 2:
        return { fontSize: "1.8em" };
      case 3:
        return { fontSize: "1.6em" };
      case 4:
        return { fontSize: "1.4em" };
      case 5:
        return { fontSize: "1.2em" };
      case 6:
        return { fontSize: "1em" };
      default:
        return { fontSize: "0.9em" };
    }
  };
  return (
    <div className={styles.contentWrapper}>
      <IoMdCloseCircleOutline
        onClick={() => {
          deleteContent(content.id);
        }}
        size={25}
        className={styles.deleteContentBtn}
      />
      <textarea
        style={fontSize()}
        ref={headingRef}
        className={styles.heading}
        defaultValue={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          updateContent(content.id, value);
        }}
      ></textarea>
    </div>
  );
};
