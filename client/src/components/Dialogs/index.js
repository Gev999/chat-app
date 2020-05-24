import React from "react";
import orderBy from "lodash/orderBy";
import { Input, Empty } from "antd";

import { DialogItem } from "../";

import "./Dialogs.scss";

const Dialogs = ({ items, userId, onSearch, inputValue, currentDialogId }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Input.Search
        placeholder="Փնտրել կոնտակտներում"
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    {items.length ? (
      orderBy(items, ["created_at"], ["desc"]).filter(item => !!item.lastMessage).map(item => (
        <DialogItem
          key={item._id}
          isMe={item.author._id === userId}
          userId={userId}
          currentDialogId={currentDialogId}
          {...item}
        />
      ))
    ) : (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="Ոչինչ չի գտնվել"
      />
    )}
  </div>
);

export default Dialogs;
