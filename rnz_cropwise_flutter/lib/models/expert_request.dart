class ExpertRequest {
  final String? id;
  final String userId;
  final String? userEmail;
  final String? userName;
  final String plantType;
  final bool isHealthy;
  final String? diseaseName;
  final String? diseaseSeverity;
  final double confidenceScore;
  final String plantImage;
  final Map<String, dynamic> diagnosisResult;
  final String status;
  final String? adminNotes;
  final String? adminResponse;
  final DateTime? createdAt;
  final DateTime? updatedAt;
  final DateTime? respondedAt;
  final String? respondedBy;

  ExpertRequest({
    this.id,
    required this.userId,
    this.userEmail,
    this.userName,
    required this.plantType,
    required this.isHealthy,
    this.diseaseName,
    this.diseaseSeverity,
    required this.confidenceScore,
    required this.plantImage,
    required this.diagnosisResult,
    required this.status,
    this.adminNotes,
    this.adminResponse,
    this.createdAt,
    this.updatedAt,
    this.respondedAt,
    this.respondedBy,
  });

  factory ExpertRequest.fromJson(Map<String, dynamic> json) {
    return ExpertRequest(
      id: json['_id'],
      userId: json['userId'] ?? '',
      userEmail: json['userEmail'],
      userName: json['userName'],
      plantType: json['plantType'] ?? '',
      isHealthy: json['isHealthy'] ?? false,
      diseaseName: json['diseaseName'],
      diseaseSeverity: json['diseaseSeverity'],
      confidenceScore: (json['confidenceScore'] ?? 0.0).toDouble(),
      plantImage: json['plantImage'] ?? '',
      diagnosisResult: json['diagnosisResult'] ?? {},
      status: json['status'] ?? 'pending',
      adminNotes: json['adminNotes'],
      adminResponse: json['adminResponse'],
      createdAt: json['createdAt'] != null ? DateTime.parse(json['createdAt']) : null,
      updatedAt: json['updatedAt'] != null ? DateTime.parse(json['updatedAt']) : null,
      respondedAt: json['respondedAt'] != null ? DateTime.parse(json['respondedAt']) : null,
      respondedBy: json['respondedBy'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      if (id != null) '_id': id,
      'userId': userId,
      if (userEmail != null) 'userEmail': userEmail,
      if (userName != null) 'userName': userName,
      'plantType': plantType,
      'isHealthy': isHealthy,
      if (diseaseName != null) 'diseaseName': diseaseName,
      if (diseaseSeverity != null) 'diseaseSeverity': diseaseSeverity,
      'confidenceScore': confidenceScore,
      'plantImage': plantImage,
      'diagnosisResult': diagnosisResult,
      'status': status,
      if (adminNotes != null) 'adminNotes': adminNotes,
      if (adminResponse != null) 'adminResponse': adminResponse,
      if (createdAt != null) 'createdAt': createdAt!.toIso8601String(),
      if (updatedAt != null) 'updatedAt': updatedAt!.toIso8601String(),
      if (respondedAt != null) 'respondedAt': respondedAt!.toIso8601String(),
      if (respondedBy != null) 'respondedBy': respondedBy,
    };
  }

  ExpertRequest copyWith({
    String? id,
    String? userId,
    String? userEmail,
    String? userName,
    String? plantType,
    bool? isHealthy,
    String? diseaseName,
    String? diseaseSeverity,
    double? confidenceScore,
    String? plantImage,
    Map<String, dynamic>? diagnosisResult,
    String? status,
    String? adminNotes,
    String? adminResponse,
    DateTime? createdAt,
    DateTime? updatedAt,
    DateTime? respondedAt,
    String? respondedBy,
  }) {
    return ExpertRequest(
      id: id ?? this.id,
      userId: userId ?? this.userId,
      userEmail: userEmail ?? this.userEmail,
      userName: userName ?? this.userName,
      plantType: plantType ?? this.plantType,
      isHealthy: isHealthy ?? this.isHealthy,
      diseaseName: diseaseName ?? this.diseaseName,
      diseaseSeverity: diseaseSeverity ?? this.diseaseSeverity,
      confidenceScore: confidenceScore ?? this.confidenceScore,
      plantImage: plantImage ?? this.plantImage,
      diagnosisResult: diagnosisResult ?? this.diagnosisResult,
      status: status ?? this.status,
      adminNotes: adminNotes ?? this.adminNotes,
      adminResponse: adminResponse ?? this.adminResponse,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      respondedAt: respondedAt ?? this.respondedAt,
      respondedBy: respondedBy ?? this.respondedBy,
    );
  }

  String get statusDisplay {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'in_progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Unknown';
    }
  }

  bool get isCompleted => status == 'completed';
  bool get isPending => status == 'pending';
  bool get isInProgress => status == 'in_progress';
  bool get isCancelled => status == 'cancelled';
}

