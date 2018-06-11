<template>
  
  <div class="task-edit column-screen" v-if="editBoxIsExpand">
    <div class="task-title">
      <div class="task-left">
        <div class="check-box"></div>
        <input type="text" class="task-title-insert" placeholder="Type Something Here...">
      </div>
      <div class="task-right">
        <ul>
          <li><img src="http://via.placeholder.com/24x23" class="icon"></li>
          <li><img src="http://via.placeholder.com/24x23" class="icon"></li>
        </ul>
      </div>
    </div>
    <div class="task-status">
      <ul>
        <li>
          <div class="icon-title deadline">
            <ul>
              <li><img src="http://via.placeholder.com/15x17" class="icon"></li>
              <li><h5>Dealine</h5></li>
            </ul>
            <div class="deadline-input">
              <input type="text" placeholder="yyyy/mm/dd"><input type="text" placeholder="hh:mm">
            </div>
          </div>
        </li>
        <li>
          <div class="icon-title file">
            <ul>
              <li><img src="http://via.placeholder.com/15x17" class="icon"></li>
              <li><h5>File</h5></li>
            </ul>
            <img class="add-file-icon" src="http://via.placeholder.com/35x35" alt="">
          </div>
        </li>
        <li>
          <div class="icon-title comment">
            <ul>
              <li><img src="http://via.placeholder.com/15x17" class="icon"></li>
              <li><h5>Comment</h5></li>
            </ul>
            <textarea style="border: none" placeholder="Type your memo here..."></textarea>
          </div>
        </li>
      </ul>
    </div>
    <div class="task-button">
      <button class="btn-cancel" v-on:click="contractedFromEdit">Cancel</button>
      <button class="btn-add-task">Add Task</button>
    </div>
  </div>
  <input class="add-task column-screen" placeholder="Add Task" v-on:click.once="expandToEdit" v-else>
</template>

<script>
export default {
  name: 'AddTask',
  data () {
    return {
      editBoxIsExpand: false
    }
  },
  methods: {
    expandToEdit () {
      this.editBoxIsExpand = true
      window.scrollTo({ 
          top: 80, 
          behavior: "smooth" 
      });
    },
    contractedFromEdit () {
      this.editBoxIsExpand = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.add-task {
  display: block;
  height: 65px;
  background-color: #fff;
  border: 2px solid #C8C8C8;
  border-radius: 5px;
  font-family: Roboto-Regular;
  font-size: 24px;
  color: #C8C8C8;
  padding: 19px 67px;
  &::placeholder {
    color: #C8C8C8;
  }
}
.task-edit {
    margin-top: 24px;
    background-color: #F2F2F2;
    border-radius: 5px;
    .task-title {
      padding: 24px 32px;
      border-bottom: 2px solid #C8C8C8;
      display: flex;
      align-content: space-between;
      height: 76px;
      border-radius: 5px 5px 0 0 ;

      .task-left {
        width: 70%;
        vertical-align: top;
        .task-title-insert {
          background-color: #F2F2F2;
          font-size: 24px;
          &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #000000;
            opacity: 1; /* Firefox */
          }
          &:-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #000000;
          }

          &::-ms-input-placeholder { /* Microsoft Edge */
            color: #000000;
          }
        }
      }
      .task-right {
        width: 30%;      
        ul {
          padding: 0px;
          margin: 0px;
          text-align: right;
          li {       
            display: inline-block;
            list-style: none;
            margin-left: 32px;
          }
        }
      }
    }
    .task-status {   
      padding: 25.6px 78px 0px 72px;
      ul {
        margin: 0;
        padding: 0;
        li {
          list-style: none;
          margin-bottom: 22px;
          .icon-title {
            ul {
              li {
                display: inline-block;
                list-style: none;
                font-size: 0px;
                h5 {
                  margin: 0px;
                  font-size: 20px;
                  margin-left: 4px;
                }
              }
            }
            .deadline-input {         
              input {
                width: 162px;
                height: 35px;
                margin-left: 8px;
                padding: 8px 16px;
                border-radius: 2px;
                font-size: 16px;
                &::placeholder {
                  color: #C8C8C8;
                }
                &:first-child {
                  margin-left: 24px;
                }
              }
            }
          }
          .file {
            .add-file-icon {
              width: 32px;
              height: 32px;
              margin-left: 24px;
              border-radius: 2px;
            }
          }
          .comment {
            textarea {
              width: 445px;
              height: 120px;
              margin-left: 24px;
              padding: 8px 16px;
              border-radius: 2px;
              font-size: 16px;
              &::placeholder {
                  color: #C8C8C8;
                }
            }
          }
        }
      }
    }
    .task-button {
      height: 60px;
      position: relative;
      border-radius: 0 0 5px 5px;
      button {
        width: calc(100%/2) ;
        margin:auto;
        height: inherit;
        border: 0px;
        font-size: 24px;
        cursor: pointer;
      }
      .btn-cancel {
        color: #D0021B;
        border-radius: 0 0 0 5px;
        position: absolute;
        bottom: 0px;
        left: 0;
      }
      .btn-add-task {
        color: #ffffff;
        background-color: #4A90E2;
        border-radius: 0 0 5px 0;
        position: absolute;
        bottom: 0px;
        right: 0;
      }
    }
  }
</style>
