export interface PollyResponseType {
  response: {
    SynthesisTask: {
      CreationTime: string;
      Engine: "neural";
      LanguageCode: "ko-KR";
      OutputFormat: "mp3";
      OutputUri: string;
      RequestCharacters: number;
      SpeechMarkTypes: any[];
      TaskId: string;
      TaskStatus: "scheduled";
      TextType: "text";
      VoiceId: "Seoyeon";
    };
  };
}
