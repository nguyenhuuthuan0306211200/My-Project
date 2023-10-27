import FormAddTask from '../components_4/form_add_task';
import ListTasks from '../components_4/list_tasks';


function TrangChu4(props) {
  // render UI
  return (
    <><div class="wrapper">
    <h1 class="text-center">TODO LIST APP</h1>
    <div class="form-add-task">
        <FormAddTask />
    </div>
    <div class="list-tasks">
        <div class="task">
        <ListTasks />
        </div>
        
    </div>
</div>


    </>

  );
}

export default TrangChu4;