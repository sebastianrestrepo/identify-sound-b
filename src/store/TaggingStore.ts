import { observable, action, computed } from 'mobx';

class TaggingStore {
    @observable playingAudio = false;
    @observable audioPos = 0;

    @action handleTogglePlay() {
          this.playingAudio = !this.playingAudio;
      }
    
    @action handlePosChange(e:any) {
          this.audioPos = e.originalArgs[0]
      }
}

export const taggingStore = new TaggingStore();