import React, {useState, useRef} from "react";
import { 
    IonBackButton, 
    IonButton, 
    IonButtons, 
    IonCol, 
    IonContent, 
    IonGrid, 
    IonHeader,
    IonInput,
     IonItem, 
     IonLabel, 
     IonPage, 
     IonRow, 
     IonTitle, 
     IonToolbar,
     IonSelect,
     IonSelectOption
    } from "@ionic/react";
import { Camera, CameraResultType} from "@capacitor/camera";
// import { base64FromPath} from '@ionic/react-hooks/Filesystem';

// import {camera} from '@ionicons/icons';

// import MemoriesContext from "../data/memories-context";
import './NewMemories.css';

// const { Filesystem } = plugins;

const NewMemories: React.FC = () => {

const [takenPhoto, setTakenPhoto] = useState<{
    path: string | undefined;
    preview: string;
}>();

const [chosenMemoryType, setChosenMemoryType] = useState<'good' | 'bad'>(
    'good'
    );

// const memoriesCtx = useContext(MemoriesContext);

const titleRef = useRef<HTMLIonInputElement>(null);

const selectMemoryTypeHandler = (event: CustomEvent) => {
    const selectedMemoryType = event.detail.value;
    setChosenMemoryType(selectedMemoryType);
};

const takePhotoHandler =async () => {
const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        quality: 80,
        width: 500
    });

    if(!photo || !photo.webPath) {
        return;
    }

    setTakenPhoto({
        path: photo.path,
        preview: photo.webPath
    });
};

// const addMemoryHandler = () => {

const enteredTitle = titleRef.current?.value;

if (
    !enteredTitle ||
    enteredTitle.toString().trim().length === 0 ||
    !takenPhoto ||
    !chosenMemoryType
) {
 
}
//     const fileName = new Data().getTime() + '.jpeg';

//     const base64 = await base64FromPath(takenPhoto!.preview);
//     Filesystem.writeFile({
//         path: fileName,
//         data: base64,
//         directory: FilesystemDirectory.Data
//     });
// memoriesCtx.addMemory( enteredTitle.toString(), chosenMemoryType);
// };

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/good-memories"/>
                    </IonButtons>
                    <IonTitle> Add New Memories</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Memory Title</IonLabel>
                                <IonInput type="text" ref={titleRef}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonSelect 
                                onIonChange={selectMemoryTypeHandler} 
                                value={chosenMemoryType}
                            >
                                <IonSelectOption value="good">Good Memory</IonSelectOption>
                                <IonSelectOption value="bad">Bad Memory</IonSelectOption>
                            </IonSelect>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-text-center">
                        <IonCol>
                            <div className="image-preview">
                                {!takenPhoto && <h3>No photo chosen.</h3>}
                                {takenPhoto && <img src={takenPhoto.preview} alt="preview"/>}
                            </div>
                           <IonButton fill="clear" onClick={takePhotoHandler}>
                               {/* <IonIcon icon={Camera} slot="start"></IonIcon> */}
                               <IonLabel>Take Photo</IonLabel>
                           </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-margin-top">
                        <IonCol className="ion-text-center">
                            <IonButton>Add Memory</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
export default NewMemories;
