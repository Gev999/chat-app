import React, { useEffect, useState } from 'react';
import { Result, Button, Spin } from 'antd';

import { userApi } from 'utils/api';
import { Block } from 'components';

const renderTextInfo = ({ hash, verified }) => {
  if (hash) {
    if (verified) {
      return {
        status: 'success',
        title: 'Պատրաստ է',
        message: 'Հաշիվը հաջողությամբ հաստատվեց',
      };
    } else {
      return {
        status: 'error',
        title: 'Սխալ',
        message: 'Դուք նշել եք գոյություն չունեցող կամ անվավեր հեշ',
      };
    }
  } else {
    return {
      status: 'info',
      title: 'Հաստատեք փոստը',
      message: 'Հաշվի հաստատման հղումը ուղարկվել է էլ. փոստին',
    };
  }
};

const CheckEmailInfo = ({ location, history }) => {
  const hash = location.search.split('hash=')[1];
  const [verified, setVerified] = useState(false);
  const [checking, setChecking] = useState(!!hash);
  const [info, setInfo] = useState(renderTextInfo({ hash, checking, verified }));

  const setStatus = ({ checking, verified }) => {
    setInfo(renderTextInfo({ hash, checking, verified }));
    setVerified(verified);
    setChecking(checking);
  };

  useEffect(() => {
    if (hash) {
      userApi
        .verifyHash(hash)
        .then(() => {
          setStatus({ verified: true, checking: false });
        })
        .catch(() => {
          setStatus({ verified: false, checking: false });
        });
    }
  }, []);

  console.log({ info, checking, verified, hash });

  return (
    <div className="verify-block">
      <Block>
        {!checking ? (
          <Result
            status={info.status}
            title={info.title}
            subTitle={info.message}
            extra={
              info.status === 'success' &&
              verified && (
                <Button type="primary" onClick={() => history.push('/signin')}>
                  Մուտք
                </Button>
              )
            }
          />
        ) : (
          <div className="verify-block__loading">
            <Spin size="large" />
          </div>
        )}
      </Block>
    </div>
  );
};

export default CheckEmailInfo;
