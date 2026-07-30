import { PromptField } from './PromptField';
import type { PromptFieldProps } from './PromptField';
import { PromptFieldControl } from './PromptFieldControl';
import { PromptFieldRecord } from './PromptFieldRecord';
import { PromptFieldSend } from './PromptFieldSend';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import { useGridApiContext } from '../../hooks/utils/useGridApiContext';
import { IS_SPEECH_RECOGNITION_SUPPORTED } from '../../utils/speechRecognition';

function GridPromptField(props: PromptFieldProps) {
  const rootProps = useGridRootProps();
  const apiRef = useGridApiContext();
  let placeholder = apiRef.current.getLocaleText('promptFieldPlaceholder');

  if (IS_SPEECH_RECOGNITION_SUPPORTED) {
    placeholder = apiRef.current.getLocaleText('promptFieldPlaceholderWithRecording');
  }

  return (
    <PromptField {...props}>
      <PromptFieldControl
        onKeyDown={(event) => {
                  throw new Error("STUB");
              }}
        render={({ ref, ...controlProps }, state) => { throw new Error("STUB"); }}
      />
    </PromptField>
  );
}

export { GridPromptField };
