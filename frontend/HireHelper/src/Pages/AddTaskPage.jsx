import React from 'react';
import { MdWork } from 'react-icons/md';


const AddTaskPage = () => (
<div className="page-container add-task-page">
<div className="page-header"><h2>Add Task</h2><p>Create a task and find someone to help you</p></div>


<div className="add-task-form">
<h3>Add New Task</h3>
<p className="sub-text">Create a task and find someone to help you.</p>


<div className="form-group"><label>Task Title</label><input type="text" placeholder="e.g. Help moving furniture" /></div>
<div className="form-group"><label>Description</label><textarea rows="4" placeholder="Describe why you need help, what's expected, and what price you can pay." /></div>
<div className="form-group"><label>Location</label><input type="text" placeholder="e.g. Downtown Seattle, 5th Ave" /></div>


<div className="form-group-row"><div className="form-group"><label>Start Date</label><input type="date" /></div><div className="form-group"><label>Start Time</label><input type="time" /></div></div>


<div className="form-group-row"><div className="form-group"><label>End Date (Optional)</label><input type="date" /></div><div className="form-group"><label>End Time (Optional)</label><input type="time" /></div></div>


<div className="form-group"><label>Category</label><select><option>Select a category</option><option>Moving</option><option>Cleaning</option><option>Tech Help</option><option>Delivery</option></select></div>


<div className="form-group"><label>Task Image (Optional)</label><div className="file-upload-area"><MdWork style={{ fontSize: '2em' }} /><p>Upload a file or drag and drop</p><p className="file-limit">PNG, JPG, GIF up to 10MB</p></div></div>


<div className="form-actions"><button className="action-button primary-action">Post Task</button><button className="action-button secondary-action">Cancel</button></div>
</div>
</div>
);


export default AddTaskPage;