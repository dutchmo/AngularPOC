export interface BatchUploadRecordModel {
  user_id: string // PK
  user_name: string;
  timestamp: number; // Sort key
  created_ts: string; // 2020-03-16T08:47:30-05:00
  updated_ts?: string;
  received_dt?: string; // YYYY-MM-DD
  image_source?: string; // MAIL, FAX, etc
  image_name?: string;
  qa_ind?: string; // QA_NOT_STARTED, QA_IN_PROGRESS, QA_COMPLETE
  json_data?: string;
  nh_json?: string;
  state_cd?: string;
  completed?: boolean;
}

export interface BatchAuditRecord {
  user_id: string // PK
  user_name: string;
  timestamp: number; // sort key
  created_ts: string; // 2020-03-16T08:47:30-05:00
  updated_ts?: string;
  qa_notes?: string;
  data_changed?: boolean;
}
