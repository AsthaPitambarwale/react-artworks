import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

interface Props {
  visible: boolean;
  onHide: () => void;
  onApply: (count: number) => void;
}

const SelectRowsDialog: React.FC<Props> = ({ visible, onHide, onApply }) => {
  let count = 0;

  return (
    <Dialog header="Select Rows" visible={visible} onHide={onHide}>
      <div className="p-fluid">
        <InputNumber
          min={1}
          onValueChange={(e) => (count = e.value || 0)}
        />
        <Button
          label="Apply"
          className="p-mt-3"
          onClick={() => onApply(count)}
        />
      </div>
    </Dialog>
  );
};

export default SelectRowsDialog;
