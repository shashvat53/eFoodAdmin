import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ value }) => {
  return (
    <div>
      <QRCode value={value} size={200} level='H' />
    </div>
  );
};

export default QRCodeGenerator;
