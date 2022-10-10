import * as SC from './NamePage.style';
import { Label } from 'src/components/Common/Label';
import { Input } from 'src/components/Common/Input';
import { useCustomForm } from 'src/hooks/useCustomForm';
import { Emoji } from 'src/components/Common/Emoji';
import { LoadingWithTitle } from 'src/components/Common/Loading/LoadingWithTitle';

const NamePage = () => {
  const {
    register,
    handleSubmit,
    fields,
    isCorrect,
    isLoading,
    addInputElement,
    removeInputElement,
    submitAction,
    realNameChange,
    endRef,
  } = useCustomForm();

  return isLoading ? (
    <LoadingWithTitle />
  ) : (
    <main>
      <SC.Wrapper>
        <SC.RealNameContainer>
          <div style={{ width: '100%' }}>
            <Label htmlFor='realName'>이름</Label>
            <Input id='realName' placeholder='이름' onChange={realNameChange} />
          </div>
        </SC.RealNameContainer>
        <SC.DivideLine />
        <SC.Form onSubmit={handleSubmit(submitAction)}>
          <SC.ExplanationText>
            이름의 <strong>의미</strong>를 작성해주세요!
            <Emoji emoji='👇' />
          </SC.ExplanationText>
          {fields.map((field, index) => {
            return (
              <>
                <SC.NameMeanContainer key={field.id}>
                  <Label htmlFor={`meanInput${index}`}>의미 {index + 1}</Label>
                  <SC.InputWrapper>
                    <Input
                      id={`meanInput${index}`}
                      placeholder='입력해주세요.'
                      register={register(`name.${index}.mean` as const)}
                    />
                    {fields.length !== 1 && index === fields.length - 1 && (
                      <SC.DeleteButton type='button' onClick={removeInputElement(index)}>
                        삭제
                      </SC.DeleteButton>
                    )}
                  </SC.InputWrapper>
                </SC.NameMeanContainer>
                {index === 0 && (
                  <>
                    <SC.ExtraText>
                      <strong>TIP</strong> 짧은 문장으로 입력하면 정확도가 올라가요!
                    </SC.ExtraText>
                    <SC.ExtraText>예시) 빛=X / 반짝이다, 빛나는, 빛나다=O</SC.ExtraText>
                  </>
                )}
              </>
            );
          })}
          <SC.AddInputButton type='button' onClick={addInputElement}>
            의미 추가하기
          </SC.AddInputButton>
          <SC.SubmitButton type='submit' disabled={!isCorrect}>
            제주일름 만들기
          </SC.SubmitButton>
        </SC.Form>
      </SC.Wrapper>
      <div
        // style={{ float: 'left', clear: 'both' }}
        ref={endRef}
      ></div>
    </main>
  );
};

export default NamePage;
