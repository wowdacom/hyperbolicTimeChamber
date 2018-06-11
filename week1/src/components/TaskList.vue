<template> 
  <div class="task-list">
    <div class="task-demo column-screen" v-if="isEdit">
      <div class="task-left">
        <div class="check-box"></div>
        <div class="task-status">
          <h2>Tpye Something Here...</h2>
          <ul>
            <li><img src="http://via.placeholder.com/16x18" class="icon"></li>
            <li><img src="http://via.placeholder.com/16x18" class="icon"></li>
            <li><img src="http://via.placeholder.com/16x18" class="icon"></li>
          </ul>
        </div>
      </div>
      <div class="task-right">
        <ul>
          <li><img src="http://via.placeholder.com/24x23" class="icon"></li>
          <li><img src="http://via.placeholder.com/24x23" class="icon"></li>
        </ul>
      </div>
    </div> 
    <div class="task-edit column-screen" v-else>
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
        <button class="btn-cancel">Cancel</button>
        <button class="btn-add-task">Add Task</button>
      </div>
    </div>
    
  </div>
  
</template>

<script>
export default {
  name: 'TaskList',
  data () {
    return {
      isEdit: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.task-list {
  .check-box {
        width: 24px;
        height: 24px;
        display: inline-block;
        background-color: #fff;
        border-radius: 2px;
        vertical-align: inherit;
        margin-right: 16px;
  }
  .task-demo {
  margin-top: 24px;
  padding: 24px 32px;
  height: 120px;
  border-radius: 5px;
  background: #F2F2F2;
  display: flex;
  align-content: space-between;
    .task-left {
      width: 70%;
      vertical-align: top;     
      .task-status {
        display: inline-block;
        h2 {
          margin: 0px;
          color: #000000;
        }
        ul {
          padding: 0px;
          margin: 15px 0px 0px 0px;
          li {
            list-style: none;
            display: inline-block;
            margin-right: 16px;
          }
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
}
</style>
