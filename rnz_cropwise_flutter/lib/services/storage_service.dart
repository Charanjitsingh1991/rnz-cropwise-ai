import 'dart:io';
import 'dart:typed_data';
import 'package:path_provider/path_provider.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class StorageService {
  static final StorageService _instance = StorageService._internal();
  factory StorageService() => _instance;
  StorageService._internal();

  final FlutterSecureStorage _secureStorage = const FlutterSecureStorage();
  late Directory _appDocumentsDirectory;
  late Directory _cacheDirectory;

  Future<void> initialize() async {
    _appDocumentsDirectory = await getApplicationDocumentsDirectory();
    _cacheDirectory = await getTemporaryDirectory();
  }

  // Secure Storage Methods
  Future<void> saveSecureData(String key, String value) async {
    await _secureStorage.write(key: key, value: value);
  }

  Future<String?> getSecureData(String key) async {
    return await _secureStorage.read(key: key);
  }

  Future<void> deleteSecureData(String key) async {
    await _secureStorage.delete(key: key);
  }

  Future<void> clearSecureData() async {
    await _secureStorage.deleteAll();
  }

  // Shared Preferences Methods
  Future<void> saveData(String key, dynamic value) async {
    final prefs = await SharedPreferences.getInstance();
    
    if (value is String) {
      await prefs.setString(key, value);
    } else if (value is int) {
      await prefs.setInt(key, value);
    } else if (value is double) {
      await prefs.setDouble(key, value);
    } else if (value is bool) {
      await prefs.setBool(key, value);
    } else if (value is List<String>) {
      await prefs.setStringList(key, value);
    }
  }

  Future<dynamic> getData(String key) async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.get(key);
  }

  Future<String?> getString(String key) async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString(key);
  }

  Future<int?> getInt(String key) async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getInt(key);
  }

  Future<bool?> getBool(String key) async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getBool(key);
  }

  Future<List<String>?> getStringList(String key) async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getStringList(key);
  }

  Future<void> removeData(String key) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(key);
  }

  Future<void> clearData() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.clear();
  }

  // File Storage Methods
  Future<File> saveFile(String fileName, Uint8List data) async {
    final file = File('${_appDocumentsDirectory.path}/$fileName');
    await file.writeAsBytes(data);
    return file;
  }

  Future<File?> getFile(String fileName) async {
    final file = File('${_appDocumentsDirectory.path}/$fileName');
    if (await file.exists()) {
      return file;
    }
    return null;
  }

  Future<void> deleteFile(String fileName) async {
    final file = File('${_appDocumentsDirectory.path}/$fileName');
    if (await file.exists()) {
      await file.delete();
    }
  }

  Future<File> saveCacheFile(String fileName, Uint8List data) async {
    final file = File('${_cacheDirectory.path}/$fileName');
    await file.writeAsBytes(data);
    return file;
  }

  Future<File?> getCacheFile(String fileName) async {
    final file = File('${_cacheDirectory.path}/$fileName');
    if (await file.exists()) {
      return file;
    }
    return null;
  }

  Future<void> clearCache() async {
    if (await _cacheDirectory.exists()) {
      await _cacheDirectory.delete(recursive: true);
      await _cacheDirectory.create();
    }
  }

  Future<int> getCacheSize() async {
    int size = 0;
    if (await _cacheDirectory.exists()) {
      await for (final entity in _cacheDirectory.list(recursive: true)) {
        if (entity is File) {
          size += await entity.length();
        }
      }
    }
    return size;
  }

  Future<String> getCacheSizeFormatted() async {
    final size = await getCacheSize();
    if (size < 1024) {
      return '${size}B';
    } else if (size < 1024 * 1024) {
      return '${(size / 1024).toStringAsFixed(1)}KB';
    } else {
      return '${(size / (1024 * 1024)).toStringAsFixed(1)}MB';
    }
  }

  // Directory Methods
  Future<Directory> createDirectory(String dirName) async {
    final directory = Directory('${_appDocumentsDirectory.path}/$dirName');
    if (!await directory.exists()) {
      await directory.create(recursive: true);
    }
    return directory;
  }

  Future<void> deleteDirectory(String dirName) async {
    final directory = Directory('${_appDocumentsDirectory.path}/$dirName');
    if (await directory.exists()) {
      await directory.delete(recursive: true);
    }
  }

  Future<List<FileSystemEntity>> listDirectory(String dirName) async {
    final directory = Directory('${_appDocumentsDirectory.path}/$dirName');
    if (await directory.exists()) {
      return await directory.list().toList();
    }
    return [];
  }
}
