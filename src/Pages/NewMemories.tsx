import React, {useState } from "react";
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
     IonToolbar 
    } from "@ionic/react";
import { Camera } from "@capacitor/camera";

// import {camera} from 'ionicons/icons';

import {CameraResultType } from "@capacitor/camera";

import './NewMemories.css';
// import { async } from "q";

// const { camera } = plugins;

const NewMemories: React.FC = () => {

const [takenPhoto, setTakenPhoto] = useState<{
    path: string;
    preview: string;
}>();

const takePhotoHandler =async () => {
const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        quality: 80,
        width: 500
    });
   
    if(!photo || !photo.path || !photo.webPath) {
        return;
    }

    setTakenPhoto({
        path: photo.path,
        preview: photo.webPath
    });
};

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
                                <IonInput type="text"></IonInput>
                            </IonItem>
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
