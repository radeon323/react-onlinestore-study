import React, {useCallback} from 'react';
import { toPng } from 'html-to-image';
import {Button} from "react-bootstrap";
import dayjs from "dayjs";

const Screenshot = ({ screenshotRef, screenshotGenerationProcess }) => {

  const screenshot = useCallback(() => {
    if (screenshotRef.current === null) {
      return;
    }
      screenshotGenerationProcess(true);
    toPng(screenshotRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');

        const url = window.location.href;
        const fileName = url.split('/');
        const reportDateNow = dayjs().format('YYYY-MMM-DD_HH-mm-ss');

        link.download = `Screenshot_${fileName[fileName.length - 1]}_${reportDateNow.toString()}.png`;
        link.href = dataUrl;
        link.click();
      })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            screenshotGenerationProcess(false);
        });
  }, [screenshotRef, screenshotGenerationProcess]);

  return (
      <Button
          variant={"outline-light"}
          onClick={screenshot}
          className="ms-2"
      >
          Take Page Screenshot
      </Button>
  );
};

export default Screenshot;
